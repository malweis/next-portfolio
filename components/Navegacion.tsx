"use client"
import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { SiteHeader } from "./site-header"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function Navegacion({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-full headercont", className)} {...props}>
      <CardHeader>
 
      </CardHeader>
      <CardContent className="grid   bg-inherit gap-4">
        
     <SiteHeader/>
      </CardContent>
      <CardFooter>
       
      </CardFooter>
    </Card>
  )
}
