/* eslint-disable react/prop-types */
import { Avatar, Divider, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
// import Actions from "./Actions";
import { useNavigate } from "react-router-dom";

export default function Comment({
  comment,
  likes,
  createdAt,
  name,
  username,
  userAvatar,
}) {
  const [liked, setLiked] = useState(false);
  let navigate = useNavigate();
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar
          cursor={"pointer"}
          onClick={() => navigate("/" + username)}
          name={name}
          src={userAvatar}
          size={"sm"}
        />
        <Flex gap={1} w={"full"} flexDir={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"start"}
          >
            <VStack
              alignItems={"start"}
              cursor={"pointer"}
              gap={0}
              onClick={() => navigate("/" + username)}
            >
              <Flex alignItems={"center"}>
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  {name}
                </Text>
                <Image
                  src={"/verifyed.png"}
                  w={4}
                  h={4}
                  ml={1}
                  objectFit={"cover"}
                />
              </Flex>
              <Text fontSize={12} mt={-1} fontWeight={600} color={"gray.light"}>
                @{username}
              </Text>
            </VStack>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                {createdAt}
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text>{comment}</Text>
          {/* <Actions liked={liked} setLiked={setLiked} /> */}
          <Text fontSize={"sm"} color={"gray.light"}>
            {likes.length + (liked ? 1 : 0)} likes
          </Text>
        </Flex>
      </Flex>
      <Divider w={"80%"} mx={"auto"} />
    </>
  );
}
