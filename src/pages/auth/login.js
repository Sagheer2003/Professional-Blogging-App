import Form from "@/components/auth/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { getSession } from "next-auth/react"


export default function SignIn () {
    const router = useRouter();
    const onSubmit = async (email, password) => {
        const data = await signIn('credentials', {redirect: false, email, password});
        if(data.ok && data.error == null) {
            router.replace("/dashboard")
        }
    };
    return <Form signin={true} onFormSubmit={onSubmit} />
};
