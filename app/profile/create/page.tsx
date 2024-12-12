import DefaultForm from "@/components/form/DefaultForm";
import DefaultInput from "@/components/form/DefaultInput";
import { DefaultSubmit } from "@/components/form/DefaultSubmit";

import { createProfileAction } from "@/utils/actions";
import { currentUser } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

async function CreateProfile() {
  const user = await currentUser();
  if (user?.privateMetadata) redirect("/");
  return (
    <section className="container py-3">
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md max-w-lg sm:max-w-full">
        <DefaultForm action={createProfileAction}>
          <div className="flex flex-col gap-x-4">
            <div className="grid md:grid-cols-2 gap-x-3">
              <DefaultInput name="firstName" label="First Name" type="text" />
              <DefaultInput name="lastName" label="Last Name" type="text" />
              <DefaultInput name="username" label="User Name" type="text" />
            </div>
            <DefaultSubmit text="Create Profile" className="self-start" />
          </div>
        </DefaultForm>
      </div>
    </section>
  );
}
export default CreateProfile;
