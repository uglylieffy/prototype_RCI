import Work from "../../../../models/Work";
import { connectToDB } from "../../../../mongodb/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const work = await Work.findById(params.id);
    console.log(params)

    if (!work) return new Response("The Work Not Found", { status: 404 });

    return new Response(JSON.stringify(work), { status: 200 });
  } catch (err) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  try {
    await connectToDB();

    const data = await req.formData();

    /* Extract info from the data */
    const title = data.get("title");
    const description = data.get("description");
    const cid = data.get("cid");

    /* Get address of uploaded photos */
    const workPhotoPaths = cid+"/0.glb";

  } catch (err) {
    console.log(err)
    return new Response("Error", { status: 500 })
  }
};

