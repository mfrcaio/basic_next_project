import Link from 'next/link';

export default function SignIn() {
  return (
    <div>
      <h1>SignIn</h1>
      <Link href='/auth/signup'>Go to o SignUp</Link>
    </div>
  );
}