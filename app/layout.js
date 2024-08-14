import './globals.css'

// here you put the content that will usually be in the head.
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

// children is the content of the page that is active (in this case page.jsx).
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
