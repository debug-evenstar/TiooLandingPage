import { books as dummybooks } from "@/contants/books";
import PhotoRobbin from "../components/LIbrary/PhotoRobbin/photoRobbin";
import Button from "../components/common/Buttons/button";


const LibraryBookCard = ({ index, image, title, author }: any) => {
  const navigate = useNavigate();
  const handleClick = (e: any) => {
    navigate(`/book/${index + 1}`);
  }
  return (
    <div onClick={handleClick} className="w-full hover:shadow-[rgba(0,0,0,0.2)_0px_0px_45px_0px] hover:scale-[1.09] duration-300 hover cursor-pointer  p-3 rounded-lg" key={index}>
      <img src={image} alt="" className="sm:w-[12rem] shadow mx-auto mb-3" />
      <p className="text-sm sm:text-base font-bold">{title}</p>
      <p className="text-sm">by {author ?? 'Tioo'} </p>
    </div>
  );
}

const BookShowcase = ({ title, books }: { title: string; books: any }) => {
  return (
    <div>
      <h3 className="outfit-font font-semibold text-[34px] sm:text-[44px] text-dark">
        {title}
      </h3>
      {/* <div className="flex justify-center sm:justify-between flex-wrap sm:flex-nowrap mt-10"> */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5 grid-rows-1  mt-10">
        {books.map(({ image, title, author }: any, index: number) => (
          <LibraryBookCard {... { image, title, author, index }} />
        ))}
      </div>
    </div>
  );
};



import { FC, useEffect, useState } from "react";
import BookFilter from "@/components/common/Filter";
import SearchBar from "@/components/common/SearchBar";
import EmptyCollection from "@/components/common/EmptyCollection";
import { useGetLibraryBooksQuery } from "@/services/api/routineSlice";
import { useNavigate } from "react-router-dom";
// import { BookCardSkeleton } from "./BookCardSkeleton";

export interface BooksComponentProps {
  books: any;
  type?: string;
  isLoading?: boolean;
}

const BooksComponent: FC<BooksComponentProps> = ({ books, type, isLoading }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    const match = books.filter((book: any) =>
      book.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBooks(match);
  }, [search, books]);
  return (
    <div className="w-full sm:w-[90%]">
      <h2 className="text-dark text-3xl font-[500] quicksand">
        All Books({books.length})
      </h2>
      <div className="my-3 flex items-center space-x-3">
        <BookFilter />
        <SearchBar
          value={search}
          onChange={handleSearchChange}
          placeholder="Search for a book"
        />
      </div>
      <div className="w-full mt-5 mb-10">
        <h2 className="py-4 text-[32px] font-[500]">Available books</h2>
        <div className={`${filteredBooks?.length ? "grid-cols-2 md:grid-cols-4" : ""} grid  gap-3 sm:gap-6 w-full`}>
          {
            !isLoading ?
              (filteredBooks?.length ?
                filteredBooks?.map((book: any, index: number) => (
                  <LibraryBookCard image={book.cover_photo} title={book.name} author={book.author} index={index} />
                ))
                : (
                  <EmptyCollection text="No books yet" />
                ))
              :
              <>
                {/* <BookCardSkeleton />
                <BookCardSkeleton />
                <BookCardSkeleton />
                <BookCardSkeleton /> */}
              </>
          }
        </div>
        {/* 
        {books.length ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 sm:gap-y-10 gap-3 sm:gap-6">
            {filteredBooks?.map((book: BookCardProps, index: number) => (
              
              <BookCard type={type} key={index} {...book} />
            ))}
          </div>
        ) : (
          <EmptyCollection text={ !(type =="shelf") ? "No books in library yet":  "No books in shelf yet" }/>
        )} */}
      </div>
    </div>
  );
};


export default function Library() {


  const [books, setBooks] = useState([]);
  const { data, isLoading } = useGetLibraryBooksQuery(null);

  useEffect(() => {
    console.log(data);
    if (data) {
      setBooks(data?.data ?? []);
    }
  }, [data])

  return (
    <div className="">
      <div className="px-3 sm:px-20 w-screen border md:pt-28 pt-5 pb-40 md:pb-28 transition-all duration-300 bg-white">
        <div className="flex items-center flex-col sm:flex-row text-center sm:text-start outfit-font bg-white">
          <div className="w-full sm:w-[55%]">
            <p className="font-semibold -top-4 relative text-[35px] sm:text-[40px] text-[#b902dc]">
              Vast Collection Of Books Made Into Interactive learning with Tioo
            </p>
            <Button
              link
              to="/signup"
              className="px-8 mt-4 py-2 bg-main rounded font-semibold text-white text-[23px]"
            >
              Get Started
            </Button>
          </div>
          <div className="relative py-20 md:py-0 md:top-0 top-28 -left-[23rem] sm:-left-0">
            <PhotoRobbin />
          </div>
        </div>
      </div>

      <div className="my-10 bg-white px-3 sm:px-20  py-20">
        <BooksComponent books={books} />
        {/* <BookShowcase title="Available" books={books} /> */}
      </div>
      {/* <div className="my-10 bg-white px-3 sm:px-20  py-20">
        <BookShowcase title="Best Science Books " books={dummybooks} />
      </div> */}
    </div>
  );
}
