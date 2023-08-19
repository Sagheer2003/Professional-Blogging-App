import Btn from "./btn";

export default function Header () {
    return (
    <header>
        <nav class="bg-orange-400 border-gray-200 px-4 lg:px-6 py-2.5">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
                <div class="flex items-center lg:order-2">

                   <strong>  Playing Blogging App</strong>  
                    <Btn />
                </div>
            </div>
        </nav>
    </header>
    )
}