import {
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Heading
} from '@chakra-ui/react'

const CryptoTable = () => {
    return (
        <>
            <Heading></Heading>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CryptoTable