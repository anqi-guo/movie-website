import User from "../../../../lib/models/user.model";
import { connectToDB } from "../../../../lib/mongodb/mongoose";
import { clerkClient, currentUser } from "@clerk/nextjs/server";

export const PUT = async (req) => {
  const user = await currentUser();
  const client = await clerkClient();
  try {
    await connectToDB();
    const data = await req.json();
    if (!user) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
    const existingUser = await User.findById(user.publicMetadata.userMongoId);
    if (existingUser.favs.some((fav) => fav.movieId === data.movieId)) {
      const updatedUser = await User.findByIdAndUpdate(
        user.publicMetadata.userMongoId,
        { $pull: { favs: { movieId: data.movieId } } },
        { new: true }
      );
      const updatedFavs = updatedUser.favs.map((fav) => fav.movieId);
      await client.users.updateUserMetadata(user.id, {
        publicMetadata: {
          favs: updatedFavs,
        },
      });
      return new Response(
        JSON.stringify({ message: "Favorite removed", user: updatedUser }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      const updatedUser = await User.findByIdAndUpdate(
        user.publicMetadata.userMongoId,
        {
          $addToSet: {
            favs: {
              movieId: data.movieId,
              title: data.title,
              description: data.overview,
              dateReleased: data.releaseDate,
              rating: data.voteCount,
              image: data.image,
            },
          },
        },
        { new: true }
      );
      const updatedFavs = updatedUser.favs.map((fav) => fav.movieId);
      await client.users.updateUserMetadata(user.id, {
        publicMetadata: {
          favs: updatedFavs,
        },
      });
      return new Response(
        JSON.stringify({ message: "Favorite added", user: updatedUser }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.log("Error adding favs to the user:", error);
    return new Response("Error adding favs to the user", { status: 500 });
  }
};
