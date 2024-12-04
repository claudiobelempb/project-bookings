import DefaultInput from "@/components/form/DefaultInput";
import { DefaultSubmit } from "@/components/form/DefaultSubmit";

const createProfileAction = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
};

function CreateProfile() {
  return (
    <section className="container py-3">
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md max-w-lg sm:max-w-full">
        <form action={createProfileAction}>
          <div className="mb-2">
            <DefaultInput
              name="firstName"
              label="First Name"
              defaultValue=""
              type="text"
            />
          </div>
          <DefaultSubmit text="Create Profile" />
        </form>
      </div>
    </section>
  );
}
export default CreateProfile;
