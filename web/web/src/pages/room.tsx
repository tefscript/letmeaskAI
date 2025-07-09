import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
    roomId: string;
}

export function Room() {

    const params = useParams<RoomParams>()

    if(!params.roomId){
        return <Navigate to="/" replace />
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-2xl space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Sala</h1>
                    <p className="text-muted-foreground">ID da sala: {params.roomId}</p>
                </div>

                <div className="bg-card rounded-lg border p-6">
                    <h2 className="text-xl font-semibold text-card-foreground mb-4">Detalhes da Sala</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">ID:</span>
                            <span className="font-mono text-sm bg-muted px-2 py-1 rounded">{params.roomId}</span>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button 
                        onClick={() => window.history.back()}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        Voltar
                    </button>
                </div>
            </div>
        </div>
    )
}