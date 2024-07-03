import { useEffect,useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {
  AdvancedSearch,
  CTA,
  HeadeFilters,
  Pagination,
  PriceRange,
  PropertyFullWidth,
  SocialIcons,
  Type,
} from "../components/common/page-componets";
import { PropertyList } from "../components/property";
import { closeFilterMenu, uiStore } from "../features/uiSlice";

const Search = () => {
  const { isFilterMenuOpen } = useSelector(uiStore);
  const dispatch = useDispatch();
    // React Router navigation
  const navigate = useNavigate();

  // Local state for page
  const [layout, setLayout] = useState("grid");
  const [l_size, setl_size] = useState(0);
  const [pag, setpag] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
    type: "all",
    offer: false,
    furnished: false,
    parking: false,
    sort: "created_at",
    order: "desc",
    location:'',
  });

  const [listings, setListings] = useState([]); // State to store listings
  console.log("Search Data: ",listings);
  const [loading, setLoading] = useState(false);
  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch(closeFilterMenu());
  };
   // Fetch listings when location.search changes
   useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      const searchQuery = new URLSearchParams(location.search).toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      setListings(data);
      setl_size(data.length);
      setLoading(false);
    };

    fetchListings();
  }, [location.search]);

  // Handle search functionality
  const handleSearch = () => {
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sidebardata.searchTerm);
    urlParams.set("type", sidebardata.type);
    urlParams.set("offer", sidebardata.offer);
    urlParams.set("furnished", sidebardata.furnished);
    urlParams.set("parking", sidebardata.parking);
    urlParams.set("sort", sidebardata.sort);
    urlParams.set("order", sidebardata.order);
    urlParams.set("location", sidebardata.location);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <HeadeFilters 
      layout={layout} setLayout={setLayout}
      l_size={l_size} pag={pag}
      onSearchTermChange={(value) =>
        setSidebardata({ ...sidebardata, searchTerm: value })
      }
      onLocationChange={(value) =>
        setSidebardata({ ...sidebardata, location: value })
      }
      onSortOrderChange={(value) => {
        const sort = value.split("_")[0] || "created_at";
        const order = value.split("_")[1] || "desc";
        setSidebardata({ ...sidebardata, sort, order });
      }}
      currentPage={currentPage}  />
      <div className="grid md:grid-cols-4 gap-x-14 mt-5">
        <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
          {layout === "grid" ? <PropertyList /> : <PropertyFullWidth />}
          <Pagination itemsPerPage={pag} pageData={listings} currentPage={currentPage} 
            setCurrentPage={setCurrentPage}/>
        </div>
        <div className=" md:col-span-1 row-start-3 md:row-start-auto h-fit md:sticky top-0">
          <div
            className={`filter-modal ${isFilterMenuOpen && "open"}`}
            onClick={handleCloseFiltermenu}
          >
            <div className={`filter-dialog ${isFilterMenuOpen && "open"}`}>
              <div className="flex-center-between border-b dark:border-dark md:hidden">
                <div
                  className="icon-box md:hidden"
                  onClick={() => dispatch(closeFilterMenu())}
                >
                  <FiDelete />
                </div>
                <p className="uppercase">Filters</p>
              </div>
              <AdvancedSearch
              onSearch={handleSearch}
              sidebardata={sidebardata}
              setSidebardata={setSidebardata} />
              <Type />
              <PriceRange />
              <SocialIcons />
              <CTA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
