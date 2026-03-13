import { Flex, Image, Link } from "@chakra-ui/react";
import { navbarImages } from "../../data/images";

export function Navbar() {
  return (
    <Flex as="nav" w="100%" p="6" justify="space-between" align="center" borderBottom="1px solid"
      borderColor="gray.300">
      {/* Logo && items */}
      <Flex align="center" gap="6">
        <Image display={{ base: "block", md: "none" }} src={navbarImages.menuIcon} alt="menu icon" />
        <Image src={navbarImages.logo} alt="logo" />

        {/* Items nav */}
        <Flex display={{ base: "none", md: "flex" }} gap="6">
          <Link href="#">Collections</Link>
          <Link href="#">Men</Link>
          <Link href="#">Women</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </Flex>
      </Flex>

      {/* Cart && avatar */}
      <Flex align="center" gap="4">
        <Image src={navbarImages.cartIcon} boxSize={6} alt="cart icon" />
        <Image src={navbarImages.avatar} alt="user avatar" boxSize="8" objectFit="cover"
          borderRadius="full"
        />
      </Flex>
    </Flex>
  );
}
