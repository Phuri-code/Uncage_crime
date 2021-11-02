import Image from 'next/image'
const Sponser = () => {
    const styles={marginleft: 0 ,marginright: 100};
    return (
        <div>
        <Image src='/aba.png' alt='Sponser' width="50" height="50" />
        <Image src='/aceleda.png' alt='Sponser' width="50" height="50" />
        <Image src='/visa.jpg' alt='Sponser' width="50" height="50" />
        </div>
    ) 
    };

 
export default Sponser;