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
import { InfoContent } from "./InfoContent"


type CardProps = React.ComponentProps<typeof Card>

export function MainInfo({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[600px] bg-background cardMainInfo ", className)} {...props}>
      <CardHeader>
     
      </CardHeader>
      <CardContent className="grid gap-4 place-items-center">
      <InfoContent/>
      </CardContent>
      <CardFooter>
       
      </CardFooter>
    </Card>
  )
}
