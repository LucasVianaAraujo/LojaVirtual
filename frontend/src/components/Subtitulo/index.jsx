export default function Subtitulo({ titulo }) {
    return (
        <div className="flex flex-col items-center pt-10 pb-12">
            <h1 className="font-bold text-blue-700 pb-2 text-3xl">{titulo}</h1>
            <div className="bg-blue-700 w-22 h-2 rounded-md" />
        </div>
    )
}