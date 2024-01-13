import React from 'react'
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'

const App: React.FC = () => {
  return (
    <div className={`grid grid-cols-${'[max-content,1fr]'} gap-4 items-stretch my-2`}>
      <div className="relative grid grid-rows-3 h-full">
        <Avatar className="w-10 h-10 border border-gray-200 row-start-1 dark:border-gray-800">
          <AvatarImage alt="acmsportsmedia" src="https://placehold.co/32x32" />
          <AvatarFallback>XX</AvatarFallback>
        </Avatar>
      </div>
      <div className="space-y-4 flex flex-col justify-between">
        <div className="font-bold">username</div>
      </div>
    </div>
  )
}

export default App
