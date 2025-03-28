import { useRouteError, Link, useNavigate } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    console.log(error);

    if (error.status === 404) {
        return (
            <main className="grid min-h-[100vh] place-items-center px-8">
                <div className="text-center">
                    <p className="text-9xl font-semibold text-primary">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                        page not found
                    </h1>
                    <p className="mt-6 text-lg leading-7">
                        Sorry, we couldn't find the page you're looking for.
                    </p>
                    <div className="mt-10">
                        <Link to="/" className="btn btn-secondary">
                            go back home
                        </Link>
                    </div>
                </div>
            </main>
        );
    }
    return (
        <main className="grid min-h-[100vh] place-items-center px-8">
            <div className="text-center flex flex-col gap-4">
                <h4 className="text-center font-bold text-4xl">
                    There was an error...
                </h4>
                <h4 className="text text-secondary">
                    Status:
                    <span className="text text-primary"> {error.status} </span>
                    <span>{error.statusText || "no status"}</span>
                </h4>
                <h4>{error.error?.message || "check console"}</h4>
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-secondary w-[10rem] mx-auto"
                >
                    go back
                </button>
            </div>
        </main>
    );
};

export default Error;
