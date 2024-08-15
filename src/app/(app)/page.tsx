'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation";




const cards = [
  {
    id: 1,
    title: "Create your Profile Link",
    desc: "Create your account to get a unique profile link that can you share with others. Receive anonymous messages directly on your dashboard , keeping communication easy and secure",
    link: '/sign-up',
    btnname : 'Create your account'
  },
  {
    id: 2,
    title: "Already have an account",
    desc: "If you already have an account , simply log in to view your messages directly on your dashboard. Stay updated and manage your communications with ease ! ",
    link:'/sign-in',
    btnname : 'LogIn'
  },
  {
    id: 3,
    title: "How to use ",
    desc: "If you are unsure how to use the platform, please refer to our user guid for detailed instructions and assistance. It will guid you through every feature and  ensure you have smooth experience ",
    link : '/guidbook',
    btnname : 'User Guid'
  },

]


export default function Home() {

  const router = useRouter();

  const onClick = (id: number) => {
    const Cardlink = cards.find(card => card.id === id);
    if(Cardlink){
      router.push(Cardlink.link)
    }
    else{
      router.push('/sign-up')
    }
  }

  return (
    <div className=' bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen md:pt-14'>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center pt-14 sm:pt-0 w-full h-full ">

        <div className=" pb-10 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold inline "> Welcome to Anonymus Messages </p>
          <p className="text-justify mt-6 text-xl text-gray-400"> Send anonymus messages or feedback directly through a simple Profile link</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0">
          {cards.map(({ id, title, desc , btnname }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <Card>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>

                </CardHeader>
                <CardContent>
                  {desc}
                </CardContent>
                <CardFooter className="flex justify-center items-center">
                  <Button  onClick ={() => onClick(id)}>{btnname}</Button>
                </CardFooter>
              </Card>

            </div>
          ))}
        </div>

      </div>


    </div>
  );
}


