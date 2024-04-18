import { useForm } from "react-hook-form";
import { Text, TextInput, NumberInput, PasswordInput } from "@/components/Themed";

const formDefaultValues = { serverIP: "", rconPort: 0, rconPassword: "", saveInformation: false };

export default function ConnectionForm() {

    const { handleSubmit, register } = useForm({ defaultValues: formDefaultValues });

    function onSubmit(data: typeof formDefaultValues) {
        console.log(data);
    }

    return (
        <form className="flex size-full flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
                <Text className="mb-2">Server IP</Text>
                <TextInput {...register("serverIP", { required: true, pattern: { value: /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/, message: "Invalid IP Address" } })} />
            </div>
            <div className="mb-6">
                <Text className="mb-2">RCON Port</Text>
                <NumberInput
                    min="1"
                    {...register("rconPort", {
                        required: true,
                        valueAsNumber: true,
                        min: { value: 1, message: "Port must be greater than 0" },
                        max: { value: 65535, message: "Port must be less than 65536" }
                    })}
                />
            </div>
            <div className="mb-6">
                <Text className="mb-2">RCON Password</Text>
                <PasswordInput {...register("rconPassword", { required: true })} />
            </div>
            <div className="mb-12">
                <label className="flex items-center">
                    <input type="checkbox" {...register("saveInformation")} />
                    <Text className="ml-2">Save Information</Text>
                </label>
            </div>
            <button type="submit" className="rounded-md border border-blue-500 bg-zinc-900 px-6 py-3 text-center font-semibold text-white">
                Connect
            </button>
        </form>
    )

}
