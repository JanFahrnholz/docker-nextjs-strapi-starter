import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Error = () => {
    return (
        <tr className="bg-white text-gray-500 w-full">
            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-center">
                <span className="mx-auto">
                    <FontAwesomeIcon
                        icon={faCircleExclamation}
                        className="mr-1 text-md"
                    />
                    An error accured while fetching data
                </span>
            </td>
        </tr>
    );
};

export default Error;
