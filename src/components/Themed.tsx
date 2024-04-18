import { cn } from "@/lib/utils";

type TextProps = React.ComponentProps<"p">;

type InputProps = React.ComponentProps<"input">;

export function Text(props: TextProps) {

    return <p {...props} className={cn("font-medium text-white", props.className)} />

}

export function TextInput(props: InputProps) {

    return <input
        {...props}
        className={cn("w-full rounded-md border-2 border-gray-400 bg-zinc-900 px-6 py-3 text-center text-white focus:outline-none", props.className)}
    />

}

export function NumberInput(props: InputProps) {

    return <TextInput type="number" {...props} />

}

export function PasswordInput(props: InputProps) {

    return <TextInput type="password" autoCapitalize="none" {...props} />

}
