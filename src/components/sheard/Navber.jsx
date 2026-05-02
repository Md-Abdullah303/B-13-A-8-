"use client";
import MyNavLink from "./MyNavLink";
import logo from "@/assets/logo.png";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Navber = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    data: session,
    isPending, //loading state
    error, //error object
  } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
    toast.info("Successful Logout!")
  };

  // console.log(user);
  return (
    <nav className="sticky top-0 z-40 shadow-sm bg-background/90 backdrop-blur-lg">
      <header className="flex items-center justify-between w-[85%] md:container mx-auto p-4 ">
        <div className="flex items-center gap-8">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={120} height={80} />
          </Link>
          <ul className="hidden items-center gap-4 md:flex">
            <li>
              <MyNavLink href={"/"}>Home</MyNavLink>
            </li>
            <li>
              <MyNavLink href={"/all-animals"}>All Animals</MyNavLink>
            </li>
          </ul>
        </div>

        {/* login , register */}
        <ul className="items-center gap-3 hidden md:flex">
          {user ? (
            <div className="flex items-center gap-5">
              <Link href={'/profile'} className="border rounded-full w-10 overflow-hidden relative h-10">
                <Image
                  src={user?.image}
                  alt={user?.name}
                  width={40}
                  height={40}
                  className="object-center object-cover"
                />
              </Link>
              <Button onClick={() => handleLogout()} variant="danger-soft">
                Logout
              </Button>
            </div>
          ) : (
            <div className="items-center gap-3 hidden md:flex">
              <li>
                <Link href={"/login"}>
                  <Button variant="outline">Login</Button>
                </Link>
              </li>
              <li>
                <Link href={"/register"}>
                  <Button>Register</Button>
                </Link>
              </li>
            </div>
          )}
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <MyNavLink href={"/"}>Home</MyNavLink>
            </li>
            <li>
              <MyNavLink href={"/all-animals"}>All Animals</MyNavLink>
            </li>
          </ul>

          {/* login , register */}
          <ul className="items-start flex px-4 py-2 flex-row md:hidden gap-2">
            {user ? (
              <div className="flex items-center gap-5">
                <Link href={'/profile'} className="border rounded-full w-10 overflow-hidden relative h-10">
                  <Image
                    src={user?.image}
                    alt={user?.name}
                    width={40}
                    height={40}
                    className="object-center object-cover"
                  />
                </Link>
                <Button onClick={() => handleLogout()} variant="danger-soft">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="items-center gap-3 flex md:hidden">
                <li>
                  <Link href={"/login"}>
                    <Button variant="outline">Login</Button>
                  </Link>
                </li>
                <li>
                  <Link href={"/register"}>
                    <Button>Register</Button>
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navber;
