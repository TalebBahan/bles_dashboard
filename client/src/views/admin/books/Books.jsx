import React from 'react';
import BookCard from './Card';
import './style.css';
import Loading from 'components/Loading';
import Unauthorized from 'components/Unauthorized';
import Form from './Form';
import { useGetBooksQuery } from './api';
import './style.css'
import Card from 'components/card';
import Navbar from "components/navbar";
import search from 'features/serch'
import { AiOutlinePlus } from "react-icons/ai";
const COLUMNS = [
    {
        Header: "Title",
        accessor: "title",
    },
    {
        Header: "body",
        accessor: "body",
    },
]
const Books = () => {
    const { data, isLoading, isError } = useGetBooksQuery()
    const [open, setOpen] = React.useState(false)
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleOpenModal = () => setOpen(!open);
    console.log(useGetBooksQuery())
    if (isLoading) {
        return <Loading />;
    }
    console.log(data)
    if (isError) {
        return <Unauthorized />;
    }

    const filteredData = search(data, COLUMNS, searchTerm);
    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }
    return (
        <div className="mt-3 grid h-full grid-cols-1 gap-10 divide-y divide-solid ">
            <div>
                <br></br>
                <Navbar
                    searchTerm={searchTerm} handleSearch={handleSearch}
                />
                <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
                    <Form open={open} handleClose={handleOpenModal} isAdd={true} />
                    <div className="relative flex items-center justify-between">
                        <div className="text-xl font-bold text-navy-700 dark:text-white">
                            Books
                        </div>
                        <button
                            className={`flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10`}
                            onClick={handleOpenModal}
                        >
                            <AiOutlinePlus />
                        </button>
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "1rem",
                            marginTop: "1rem",
                            width: "100%",
                        }}
                    >
                        {filteredData?.map((book) => (
                            <BookCard {...book} />
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Books;
