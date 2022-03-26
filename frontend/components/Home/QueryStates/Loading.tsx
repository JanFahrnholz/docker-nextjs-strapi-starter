import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BarLoader from "react-bar-loader";

const Loading = () => {
    return (
        <tr className="bg-white w-full">
            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                {/* <span className="mx-auto">Loading...</span> */}
                <BarLoader
                    height="3"
                    color="#4f46e5"
                    className="w-1/3 lg:w-1/6 mx-auto my-2"
                />
            </td>
        </tr>
    );
};

export default Loading;
