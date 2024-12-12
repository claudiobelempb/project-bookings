import DefaultForm from "@/components/form/DefaultForm";
import DefaultInput from "@/components/form/DefaultInput";
import { DefaultSubmit } from "@/components/form/DefaultSubmit";
import UserIcon from "@/components/navbar/UserIcon";
import { updateProfileAction, fetchProfile } from "@/utils/actions";
import Image from "next/image";
import React from "react";

async function ProfilePage() {
  const profile = await fetchProfile();
  return (
    <section className="container py-3">
      <h1 className="text-2xl font-semibold mb-8 capitalize">user profile</h1>
      <div className="border p-8 rounded-md max-w-lg sm:max-w-full">
        <DefaultForm action={updateProfileAction}>
          <div className="flex flex-col gap-x-4">
            <div className="flex flex-col gap-y-4">
              <div className="rounded w-16 h-16 flex justify-center items-center bg-primary">
                <Image
                  src={profile.profileImage}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              {/* <DefaultInput
                name="profileImage"
                label="profile Image"
                defaultValue=""
                type="file"
              /> */}
            </div>
            <div className="grid md:grid-cols-2 gap-x-3">
              <DefaultInput
                name="firstName"
                label="First Name"
                type="text"
                defaultValue={profile.firstName}
              />
              <DefaultInput
                name="lastName"
                label="Last Name"
                type="text"
                defaultValue={profile.lastName}
              />
              <DefaultInput
                name="username"
                label="User Name"
                type="text"
                defaultValue={profile.username}
              />
            </div>
            <DefaultSubmit text="Update Profile" className="self-start" />
          </div>
        </DefaultForm>
      </div>
    </section>
  );
}

export default ProfilePage;
