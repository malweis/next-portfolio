"use client"
import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "./theme-toggle"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {

  function renderRandomIcons() {
  
  
    return (
      <div className="grid grid-cols-8  gap-4  border-none max-w-full h-full">
 
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-14 w-14 text-secondary" />
          <span className="font-bold text-secondary flex">{siteConfig.name}</span>
        </Link>
        <svg viewBox="0 0 220 220" width={86} height={86} className="fill-secondary" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M96.587 170.018C95.9376 175.502 91.5229 180 86 180L50 180C44.4772 180 39.9629 175.508 40.3517 169.999C45.2467 100.65 100.65 45.2467 169.999 40.3517C175.508 39.9629 180 44.4772 180 50V86C180 91.5229 175.502 95.9376 170.018 96.587C131.605 101.135 101.135 131.605 96.587 170.018Z" ></path></svg>
        <svg viewBox="0 0 220 220"width={86} height={86}  className="fill-secondary-foreground" fill="none"><path d="M60 110C60 145.277 86.0986 176.957 120.036 182.231C125.493 183.079 130 178.523 130 173V53C130 47.4772 125.501 42.9296 120.024 43.6404C86.0893 48.0449 60 74.727 60 110Z" className="fill-secondary-foreground"></path></svg>
        <svg viewBox="0 0 220 220"width={86} height={86}  className="fill-secondary" fill="none"><path d="M105 42.8867C108.094 41.1004 111.906 41.1004 115 42.8868L165.622 72.1133C168.716 73.8996 170.622 77.2008 170.622 80.7735V139.227C170.622 142.799 168.716 146.1 165.622 147.887L115 177.113C111.906 178.9 108.094 178.9 105 177.113L54.3782 147.887C51.2842 146.1 49.3782 142.799 49.3782 139.226V80.7735C49.3782 77.2008 51.2842 73.8996 54.3782 72.1132L105 42.8867Z" ></path></svg>
        <svg viewBox="0 0 220 220"width={86} height={86}   fill="none"><path d="M40 107C40 142.277 66.0986 173.957 100.036 179.231C105.493 180.079 110 175.523 110 170V50C110 44.4772 105.501 39.9296 100.024 40.6404C66.0893 45.0449 40 71.727 40 107Z"className="fill-secondary-foreground" ></path><circle cx="110" cy="110" r="66" className="stroke-secondary-foreground" strokeWidth="8"></circle></svg>
        <svg viewBox="0 0 220 220" width={86} height={86} className="fill-secondary" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M84.9703 40.7046C79.5028 39.925 75 44.4771 75 50L75 70C75 75.5228 79.6 79.8368 84.819 81.6437C96.8654 85.7105 105 96.8702 105 110C105 123.13 96.8654 134.289 84.819 138.386C79.6 140.163 75 144.477 75 150L75 170C75 175.523 79.5028 180.075 84.9703 179.295C118.908 174.486 145 145.275 145 110C145 74.725 118.908 45.5442 84.9703 40.7046Z" ></path></svg>
        <svg viewBox="0 0 220 220" width={86} height={86}  className="fill-secondary-foreground" fill="none"><rect x="40" y="40" width="140" height="140" rx="10" ></rect></svg>
        <svg viewBox="0 0 220 220" width={86} height={86}  className="fill-secondary"fill="none"><rect x="70" y="40" width="80" height="140" rx="40" ></rect></svg>
        <svg viewBox="0 0 220 220" width={86} height={86}  className="fill-secondary" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M96.587 170.018C95.9376 175.502 91.5229 180 86 180L50 180C44.4772 180 39.9629 175.508 40.3517 169.999C45.2467 100.65 100.65 45.2467 169.999 40.3517C175.508 39.9629 180 44.4772 180 50V86C180 91.5229 175.502 95.9376 170.018 96.587C131.605 101.135 101.135 131.605 96.587 170.018Z" ></path></svg>
        <svg viewBox="0 0 220 220"width={86} height={86}  className="fill-secondary" fill="none"><path d="M60 110C60 145.277 86.0986 176.957 120.036 182.231C125.493 183.079 130 178.523 130 173V53C130 47.4772 125.501 42.9296 120.024 43.6404C86.0893 48.0449 60 74.727 60 110Z" className="fill-secondary-foreground"></path></svg>
        <svg viewBox="0 0 220 220"width={86} height={86}   className="fill-secondary" fill="none"><path d="M105 42.8867C108.094 41.1004 111.906 41.1004 115 42.8868L165.622 72.1133C168.716 73.8996 170.622 77.2008 170.622 80.7735V139.227C170.622 142.799 168.716 146.1 165.622 147.887L115 177.113C111.906 178.9 108.094 178.9 105 177.113L54.3782 147.887C51.2842 146.1 49.3782 142.799 49.3782 139.226V80.7735C49.3782 77.2008 51.2842 73.8996 54.3782 72.1132L105 42.8867Z" ></path></svg>
        <svg viewBox="0 0 220 220"width={86} height={86}   fill="none"><path d="M40 107C40 142.277 66.0986 173.957 100.036 179.231C105.493 180.079 110 175.523 110 170V50C110 44.4772 105.501 39.9296 100.024 40.6404C66.0893 45.0449 40 71.727 40 107Z" className="fill-secondary-foreground" ></path><circle cx="110" cy="110" r="66" className="stroke-secondary-foreground"  strokeWidth="8"></circle></svg>
        <svg viewBox="0 0 220 220" width={86} height={86} className="fill-secondary" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M84.9703 40.7046C79.5028 39.925 75 44.4771 75 50L75 70C75 75.5228 79.6 79.8368 84.819 81.6437C96.8654 85.7105 105 96.8702 105 110C105 123.13 96.8654 134.289 84.819 138.386C79.6 140.163 75 144.477 75 150L75 170C75 175.523 79.5028 180.075 84.9703 179.295C118.908 174.486 145 145.275 145 110C145 74.725 118.908 45.5442 84.9703 40.7046Z" ></path></svg>
        <svg viewBox="0 0 220 220" width={86} height={86}  className="fill-secondary-foreground" fill="none"><rect x="40" y="40" width="140" height="140" rx="10" ></rect></svg>
        <svg viewBox="0 0 220 220" width={86} height={86} className="fill-secondary" fill="none"><rect x="70" y="40" width="80" height="140" rx="40" ></rect></svg>
        <svg viewBox="0 0 220 220" width={86} height={86}  className="fill-secondary-foreground" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M96.587 170.018C95.9376 175.502 91.5229 180 86 180L50 180C44.4772 180 39.9629 175.508 40.3517 169.999C45.2467 100.65 100.65 45.2467 169.999 40.3517C175.508 39.9629 180 44.4772 180 50V86C180 91.5229 175.502 95.9376 170.018 96.587C131.605 101.135 101.135 131.605 96.587 170.018Z" ></path></svg>
        <svg viewBox="0 0 220 220"width={86} height={86}  className="fill-secondary-foreground"  fill="none"><path d="M60 110C60 145.277 86.0986 176.957 120.036 182.231C125.493 183.079 130 178.523 130 173V53C130 47.4772 125.501 42.9296 120.024 43.6404C86.0893 48.0449 60 74.727 60 110Z" className="fill-secondary-foreground"></path></svg>
        <svg viewBox="0 0 220 220"width={86} height={86}   className="fill-secondary" fill="none"><path d="M105 42.8867C108.094 41.1004 111.906 41.1004 115 42.8868L165.622 72.1133C168.716 73.8996 170.622 77.2008 170.622 80.7735V139.227C170.622 142.799 168.716 146.1 165.622 147.887L115 177.113C111.906 178.9 108.094 178.9 105 177.113L54.3782 147.887C51.2842 146.1 49.3782 142.799 49.3782 139.226V80.7735C49.3782 77.2008 51.2842 73.8996 54.3782 72.1132L105 42.8867Z" ></path></svg>
        <svg viewBox="0 0 220 220"width={86} height={86}  fill="none"><path d="M40 107C40 142.277 66.0986 173.957 100.036 179.231C105.493 180.079 110 175.523 110 170V50C110 44.4772 105.501 39.9296 100.024 40.6404C66.0893 45.0449 40 71.727 40 107Z"className="fill-secondary-foreground" ></path><circle cx="110" cy="110" r="66" className="stroke-secondary-foreground" strokeWidth="8"></circle></svg>
        <svg viewBox="0 0 220 220" width={86} height={86}  className="fill-secondary" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M84.9703 40.7046C79.5028 39.925 75 44.4771 75 50L75 70C75 75.5228 79.6 79.8368 84.819 81.6437C96.8654 85.7105 105 96.8702 105 110C105 123.13 96.8654 134.289 84.819 138.386C79.6 140.163 75 144.477 75 150L75 170C75 175.523 79.5028 180.075 84.9703 179.295C118.908 174.486 145 145.275 145 110C145 74.725 118.908 45.5442 84.9703 40.7046Z" ></path></svg>
        <svg viewBox="0 0 220 220" width={86} height={86}  className="fill-secondary-foreground" fill="none"><rect x="40" y="40" width="140" height="140" rx="10" ></rect></svg>
        <svg viewBox="0 0 220 220" width={86} height={86}  className="fill-secondary" fill="none"><rect x="70" y="40" width="80" height="140" rx="40" ></rect></svg>
        <svg viewBox="0 0 220 220" width={86} height={86}  className="fill-secondary-foreground" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M96.587 170.018C95.9376 175.502 91.5229 180 86 180L50 180C44.4772 180 39.9629 175.508 40.3517 169.999C45.2467 100.65 100.65 45.2467 169.999 40.3517C175.508 39.9629 180 44.4772 180 50V86C180 91.5229 175.502 95.9376 170.018 96.587C131.605 101.135 101.135 131.605 96.587 170.018Z" ></path></svg>
        <svg viewBox="0 0 220 220"width={86} height={86}  className="fill-secondary" fill="none"><path d="M60 110C60 145.277 86.0986 176.957 120.036 182.231C125.493 183.079 130 178.523 130 173V53C130 47.4772 125.501 42.9296 120.024 43.6404C86.0893 48.0449 60 74.727 60 110Z" className="fill-secondary"></path></svg>
        <svg viewBox="0 0 220 220"width={86} height={86}  className="fill-secondary" fill="none"><path d="M105 42.8867C108.094 41.1004 111.906 41.1004 115 42.8868L165.622 72.1133C168.716 73.8996 170.622 77.2008 170.622 80.7735V139.227C170.622 142.799 168.716 146.1 165.622 147.887L115 177.113C111.906 178.9 108.094 178.9 105 177.113L54.3782 147.887C51.2842 146.1 49.3782 142.799 49.3782 139.226V80.7735C49.3782 77.2008 51.2842 73.8996 54.3782 72.1132L105 42.8867Z" ></path></svg>
        <svg viewBox="0 0 220 220"width={86} height={86}   fill="none"><path d="M40 107C40 142.277 66.0986 173.957 100.036 179.231C105.493 180.079 110 175.523 110 170V50C110 44.4772 105.501 39.9296 100.024 40.6404C66.0893 45.0449 40 71.727 40 107Z" className="fill-secondary-foreground" ></path><circle cx="110" cy="110" r="66"className="stroke-secondary-foreground" strokeWidth="8"></circle></svg>
        <svg viewBox="0 0 220 220" width={86} height={86} className="fill-secondary" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M84.9703 40.7046C79.5028 39.925 75 44.4771 75 50L75 70C75 75.5228 79.6 79.8368 84.819 81.6437C96.8654 85.7105 105 96.8702 105 110C105 123.13 96.8654 134.289 84.819 138.386C79.6 140.163 75 144.477 75 150L75 170C75 175.523 79.5028 180.075 84.9703 179.295C118.908 174.486 145 145.275 145 110C145 74.725 118.908 45.5442 84.9703 40.7046Z" ></path></svg>
        <svg viewBox="0 0 220 220" width={86} height={86} className="fill-secondary-foreground" fill="none"><rect x="40" y="40" width="140" height="140" rx="10" ></rect></svg>
       
        {items?.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium text-secondary hover:fill-cyan-500 dark:fill-white dark:hover:fill-cyan-500",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            )
        )}
      
      </div>
    );
  }
  
  
  
  return (
    <div className="flex gap-6 h-full md:gap-10">
     
     <div className="flex h-full gap-6">
          {renderRandomIcons()}
        </div>
      
    </div>
  )
}