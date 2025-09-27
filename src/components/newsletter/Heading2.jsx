export default function Heading2({ children, ...props }) {
  return (
    <h2
      className="relative mt-10 pt-6 text-2xl font-bold text-gray-800 dark:text-gray-100
                 before:content-[''] before:absolute before:top-0 before:left-0 
                 before:w-full before:h-1 before:bg-gradient-to-r 
                 before:from-pink-400 before:to-purple-400"
      {...props}
    >
      {children}
    </h2>
  );
}
