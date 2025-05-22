export function Button({ children, ...props }) {
  return <button className='p-2 bg-blue-600 text-white rounded' {...props}>{children}</button>;
}