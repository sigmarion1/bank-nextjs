import React from "react";
import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    Select,
} from "@chakra-ui/react";

export default function TransactionModal({
    isOpen,
    onOpen,
    onClose,
}: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}) {
    const initialRef = React.useRef(null);

    const headText = "입금";

    const options = [
        { value: "책", label: "책" },
        { value: "군것질", label: "군것질" },
        { value: "장난감", label: "장난감" },
        { value: "학용품", label: "학용품" },
        { value: "기타", label: "기타" },
    ];

    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button>
            <Button ml={4} ref={finalRef}>
                I'll receive focus on close
            </Button> */}

            <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{headText}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>금액</FormLabel>
                            <Input ref={initialRef} type="number" />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>내용</FormLabel>
                            <Select placeholder="선택">
                                {options.map((option, id) => (
                                    <option key={id} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                            입금요청
                        </Button>
                        <Button onClick={onClose}>취소</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
