import { Header } from "next/dist/lib/load-custom-routes"
const NewTest =()=>{
    return (
        <>
        <div>
            <div x-data="{ sidebarOpen: true }" class="flex overflow-x-hidden h-screen">
                <div class="flex-shrink-0 w-64 flex flex-col border-r transition-all duration-300" {  !sidebarOpen ?'-ml-64': } >
                    <div class="h-64 bg-gray-900"></div>
                    <nav class="flex-1 flex flex-col bg-white">
                    <a href="#" class="p-2">Nav Link 1</a>
                    <a href="#" class="p-2">Nav Link 2</a>
                    <a href="#" class="p-2">Nav Link 3</a>
                    </nav>
                </div>
                <div class="flex-1">
                    <Header class="flex items-center p-4 text-semibold text-gray-100 bg-gray-900">
                    <button class="p-1 mr-4" onClick="sidebarOpen = !sidebarOpen">
                        <img  fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"/ >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </button>
                    Header
                    </Header>
                    <main class="p-4">
                    Main Content
                    </main>
                </div>
            </div>  
        </div>
        </>        
    );
}