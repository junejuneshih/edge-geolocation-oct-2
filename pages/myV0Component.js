/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7c4xS1VskcB
 */
import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="w-full max-w-md p-4 mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white">8th Grade Birthday Invitation</h2>
        <svg
          className=" h-6 w-6 text-gray-700 dark:text-gray-200"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
          <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
          <path d="M2 21h20" />
          <path d="M7 8v2" />
          <path d="M12 8v2" />
          <path d="M17 8v2" />
          <path d="M7 4h.01" />
          <path d="M12 4h.01" />
          <path d="M17 4h.01" />
        </svg>
      </div>
      <div className="mt-4">
        <img alt="Boba image" className="object-cover rounded-lg" height="200" src="/placeholder.svg" width="200" />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Come join us for a boba-filled birthday party! We've got games, music, and lots of boba treats.
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button className="px-3 py-2 bg-gray-700 text-white text-xs font-bold uppercase rounded">RSVP</button>
        <p className="text-xs text-gray-500 dark:text-gray-300">Location: Boba Town</p>
      </div>
    </Card>
  )
}
