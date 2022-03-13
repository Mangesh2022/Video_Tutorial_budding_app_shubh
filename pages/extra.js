const Extra = () => {
  return (
    <>
      <div className="lg:flex lg:items-center px-4 my-4 mr-8 lg:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-xs flex flex-row ml-4 font-bold leading-7 text-gray-500 sm:text-sm sm:truncate">
            <div className="mr-2">Hm</div>
            <div>Pages</div>
            <div className="text-gray-800 flex">
              <div>/</div>Default
            </div>
            <div className="ml-8  items-center  ">bars</div>
          </h2>
          <div className=" m flex flex-col sm:flex-row sm:flex-wrap  sm:space-x-6">
            <div className="my-1 ml-4 font-semibold flex items-center md:text-xl  text-sm text-gray-900 ">
              Default
            </div>
          </div>
        </div>
        <div className="my-auto flex items-center  flex-col sm:flex-row sm:flex-wrap md:flex-nowrap  space-x-6">
          <div className="flex flex-row justify-between items-center space-x-2 py-1 px-4 border rounded-md">
            <div>O</div>
            <input
              type="text"
              placeholder="Type here..."
              className="py-2 px-2"
            />
          </div>
          <div className="flex flex-row space-x-2">
            <div>us</div>
            <div>Sing in</div>
          </div>
          <div>set</div>
          <div>set</div>
        </div>
      </div>
      {/* <----Table content ----> */}
      <div className="border mx-8  rounded-2xl ">
        {/* <----Table Title bar ----> */}
        <div className="lg:flex  rounded-t-2xl lg:items-center px-4  lg:justify-between">
          <div className="flex-1 min-w-0">
            <div className="  flex flex-col sm:flex-row sm:flex-wrap  sm:space-x-6">
              <div className=" ml-4 mt-4 font-semibold flex items-center md:text-xl  text-sm text-gray-900 ">
                Default Table Title
              </div>
            </div>
          </div>
        </div>
        <div className="mx-8   my-4 w-auto flex items-center flex-col justify-between sm:flex-row sm:flex-wrap md:flex-nowrap  space-x-6">
          <div className="flex flex-row space-x-2">
            <div className="space-x-2 flex flex-row">
              <div>Show</div>
              <select className="rounded-md bg-gray-100 py-1 px-1">
                <option value="0-10">10</option>
                <option value="10-20">10-20</option>
                <option value="20-30">20-30</option>
                <option value="30-40">30-40</option>
                <option value="40-50">40-50</option>
                <option value="50-60">50-60</option>
              </select>
              <div>entities</div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center space-x-2 py-1 px-4 border  rounded-md">
            <div>O</div>
            <input
              type="text"
              placeholder="Type here..."
              className="py-2 px-2"
            />
          </div>
        </div>
        {/* <----Table Fields bar ----> */}

        <div className="flex flex-col">
          <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className=" overflow-hidden border-b border-gray-200 sm:rounded-lg">
                {/* <----Table  ----> */}

                <table className="min-w-full  divide-y divide-gray-800">
                  {/* <----Table Head bar ----> */}

                  <thead className="bg-gray-50  font-semibold">
                    <tr className="text-left text-xs  text-gray-400 uppercase tracking-wider">
                      <th scope="col" className="px-6 py-3 ">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 ">
                        Function
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Review
                      </th>
                      <th scope="col" className="px-6 py-3 text-center ">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Employed
                      </th>
                      <th scope="col" className="px-6 py-3 text-center ">
                        ID
                      </th>
                    </tr>
                  </thead>
                  {/* <----Table body   ----> */}

                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* <----Table body  row 1 ----> */}

                    <tr>
                      <td className="px-6 py-4 ">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://via.placeholder.com/300/09f/fff.png%20C/O%20https://placeholder.com/"
                              alt="img"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              sdfdsfsadlfldsfjldsjf
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-900">
                          sdffsdsakdlfjlsdjfldjfljsld{" "}
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <span className=" inline-flex text-xs leading-5 items-center ">
                          <div className="h-2 w-2 rounded-full bg-sky-500 mr-2"></div>
                          positive
                        </span>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-900 text-center">
                          sdffsdsakdlfjlsdjfldjfljsld
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-900 text-center">
                          sdffsdsakdlfjlsdjfldjfljsld
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-900 text-center">
                          sdffsdsakdlfjlsdjfldjfljsld
                        </div>
                      </td>
                    </tr>
                    {/* <----Table body  row 2 ----> */}

                    <tr>
                      <td className="px-6 py-4 ">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://via.placeholder.com/300/09f/fff.png%20C/O%20https://placeholder.com/"
                              alt="img"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              sdfdsfsadlfldsfjldsjf
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-900">
                          sdffsdsakdlfjlsdjfldjfljsld{" "}
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <span className=" inline-flex text-xs leading-5 items-center ">
                          <div className="h-2 w-2 rounded-full bg-violet-900 mr-2"></div>
                          neutral
                        </span>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-900 text-center">
                          sdffsdsakdlfjlsdjfldjfljsld
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-900 text-center">
                          sdffsdsakdlfjlsdjfldjfljsld
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-900 text-center">
                          sdffsdsakdlfjlsdjfldjfljsld
                        </div>
                      </td>
                    </tr>
                    {/* <----Table body  row 2 ----> */}

                    <tr>
                      <td className="px-6 py-4 ">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://via.placeholder.com/300/09f/fff.png%20C/O%20https://placeholder.com/"
                              alt="img"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              sdfdsfsadlfldsfjldsjf
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-900">
                          sdffsdsakdlfjlsdjfldjfljsld{" "}
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <span className=" inline-flex text-xs leading-5 items-center ">
                          <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                          negative
                        </span>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-900 text-center ">
                          skdfjlsdfldsfl@gmail.com
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-900  text-center">
                          sdffsdsakdlfjlsdjfldjfljsld
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-900 text-center">
                          sdffsdsakdlfjlsdjfldjfljsld
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mx-8 mt-4 pb-8 ">
            <div className="mx-8">Showing 1 to 10 of 57 entries</div>
            <div className="flex flex-row justify-center items-center align-middle text-center space-x-6">
              <div>
                <a href="#">-</a>
              </div>
              <div className="flex flex-row justify-center items-center align-middle text-center space-x-4">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">7</a>
              </div>
              <div>
                <a href="#">-</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Extra;
