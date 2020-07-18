import { useRouter } from "next/router";

const router = useRouter();

function routerHook(Component) {
    return function WrappedComponent(props) {
        return <Component {...props} router={router} />;
    }
}

export default routerHook;