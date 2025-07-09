import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

type GetRoomsAPIResponse = Array<{
    id: string, name: string
}>

export function CreateRoom() {
    const {data, isLoading} = useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3333/rooms')
            const result: GetRoomsAPIResponse = await response.json()

            return result
        }
    })

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Let Me Ask</h1>
                    <p className="text-muted-foreground">Escolha uma sala para participar</p>
                </div>

                <div className="bg-card rounded-lg border p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-card-foreground">Salas Disponíveis</h2>
                    
                    {isLoading && (
                        <div className="flex items-center justify-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                            <span className="ml-2 text-muted-foreground">Carregando salas...</span>
                        </div>
                    )}

                    {!isLoading && data && data.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-muted-foreground">Nenhuma sala encontrada</p>
                        </div>
                    )}

                    <div className="space-y-2">
                        {data?.map((room) => (
                            <Link 
                                key={room.id} 
                                to={`/room/${room.id}`}
                                className="block w-full p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-card-foreground">{room.name}</span>
                                    <span className="text-sm text-muted-foreground">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}