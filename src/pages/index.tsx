import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Text, Button, Box } from "src/ui";
import { styled } from "stitches.config";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>impacted</title>
        <meta name="description" content="impacted: reviews for NFP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <Box css={{ d: "flex", gap: "$3" }}>
          <Text css={{ fw: "bold", mx: "auto", mb: "$5" }} size="8">
            impacted
          </Text>
          <Button size="3" css={{ w: "fit-content", mx: "auto" }}>
						Login
          </Button>
        </Box>
        <Box css={{ d: "flex", fd: "column", gap: "$3" }}>
          <Link href="/leave-review">
            <Button size="3" css={{ w: "fit-content", mx: "auto" }}>
              Leave Review
            </Button>
          </Link>
          <Link href="/see-reviews">
            <Button size="3" css={{ w: "fit-content", mx: "auto" }}>
              See Reviews
            </Button>
          </Link>
        </Box>
      </StyledMain>
    </>
  );
};

const StyledMain = styled("main", {
  w: "100%",
  maw: "80em",
  d: "flex",
  fd: "column",
  py: "$4",
  mx: "auto",
});

export default Home;
