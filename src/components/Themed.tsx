import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type TextProps = React.ComponentProps<"p">;

type InputProps = React.ComponentProps<"input">;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(props, ref) {

    return <p ref={ref} {...props} className={cn("font-medium text-white", props.className)} />

});

export const TextInput = forwardRef<HTMLInputElement, InputProps>(function TextInput(props, ref) {

    return <input
        ref={ref}
        {...props}
        className={cn("w-full rounded-md border-2 border-gray-400 bg-zinc-900 px-6 py-3 text-center text-white focus:outline-none", props.className)}
    />

});

export const NumberInput = forwardRef<HTMLInputElement, InputProps>(function NumberInput(props, ref) {

    return <TextInput ref={ref} type="number" {...props} />

});

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(function PasswordInput(props, ref) {

    return <TextInput ref={ref} type="password" autoCapitalize="none" {...props} />

});
