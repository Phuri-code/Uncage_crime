import { useRouter } from "next/dist/client/router";
import Link from 'next/link';


export default function ActiveLink({children,href}){
const router = useRouter();
const styles = {
    color : router.pathname==href ? "red":"white"
};

return (
    <Link href={href}><a style={styles}>{children}</a></Link>
);
}