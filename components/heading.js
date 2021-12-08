export default function Heading(props) {
    return (
        <>
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">
					{props.heading}
				</span>
            </h1>
            <div className="w-full mb-4">
                <div
                    className="h-1 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 w-32 opacity-25 my-0 py-0 rounded-t"/>
            </div>
        </>
    )
}