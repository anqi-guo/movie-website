// import { Webhook } from "svix";
// import { headers } from "next/headers";

// export async function POST(req) {
//   const SIGNING_SECRET = process.env.SIGNING_SECRET;
//   if (!SIGNING_SECRET) {
//     throw new Error("SIGNING_SECRET is not set");
//   }
//   const wh = new Webhook(SIGNING_SECRET);
//   const headerPayload = await headers();
//   const svix_id = headerPayload.get("svix-id");
//   const svix_timestamp = headerPayload.get("svix-timestamp");
//   const svix_signature = headerPayload.get("svix-signature");

//   if (!svix_id || !svix_timestamp || !svix_signature) {
//     return new Response("Missing headers", { status: 400 });
//   }

//   const payload = await req.json();
//   const body = JSON.stringify(payload);

//   let evt;

//   try {
//     evt = wh.verify(body, {
//       "svix-id": svix_id,
//       "svix-timestamp": svix_timestamp,
//       "svix-signature": svix_signature,
//     });
//   } catch (err) {
//     console.error("Error verifying webhook:", err);
//     return new Response("Error verifying webhook", { status: 400 });
//   }

//   const { id } = evt.data;
//   const eventType = evt.type;
//   console.log(`Received webhook with ID ${id} and event type of ${eventType}`);
//   console.log("Webhook payload:", body);

//   if (eventType === "user.created") {
//     // Handle user.created event
//     console.log("User created:", evt.data);
//   }
//   if (eventType === "user.updated") {
//     // Handle user.updated event
//     console.log("User updated:", evt.data);
//   }
//   if (eventType === "user.deleted") {
//     // Handle user.deleted event
//     console.log("User deleted:", evt.data);
//   }

//   return new Response("Webhook received", { status: 200 });
// }

import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { createOrUpdateUser, deleteUser } from "@/lib/actions/user";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(req) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`
    );
    console.log("Webhook payload:", evt.data);

    if (eventType === "user.created" || eventType === "user.updated") {
      const { first_name, last_name, image_url, email_addresses } = evt.data;
      try {
        const user = await createOrUpdateUser(
          id,
          first_name,
          last_name,
          image_url,
          email_addresses
        );
        if (user && eventType === "user.created") {
          try {
            const client = await clerkClient();
            await client.users.updateUserMetadata(id, {
              publicMetadata: {
                userMongoId: user._id,
              },
            });
          } catch (error) {
            console.error("Error updating user metadata:", error);
          }
        }
      } catch (error) {
        console.error("Error creating or updating user:", error);
        return new Response("Error creating or updating user", { status: 400 });
      }
    }

    if (eventType === "user.deleted") {
      try {
        await deleteUser(id);
      } catch (error) {
        console.error("Error deleting user:", error);
        return new Response("Error deleting user", { status: 400 });
      }
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
