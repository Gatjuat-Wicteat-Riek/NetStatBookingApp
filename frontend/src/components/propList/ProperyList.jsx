import useFetch from "../../hooks/useFetch.js";
import "./propertyList.css";

const PropertyList = () => {
    const { data, loading, error } = useFetch("/hotels/countByType");

    const images = [
        "https://i.pinimg.com/236x/3e/35/95/3e359520c92ed74a2e012808be94b9d6.jpg",
        "https://i.pinimg.com/236x/0d/75/5e/0d755e0e69543cca6739f9dc65f8e4a6.jpg",
        "https://i.pinimg.com/236x/ef/c6/62/efc662ad7d783e588fcf5f8a2f28693f.jpg",
        "https://i.pinimg.com/236x/01/ea/a9/01eaa957af4312b0f2124026303dd52b.jpg",
        "https://i.pinimg.com/236x/9b/88/38/9b88386fe3247c82a88dd1db31249fb6.jpg",
    ];
    return (
        <div className="pList">
            {loading ? (
                "loading"
            ) : (
                <>
                    {data &&
                        images.map((img,i) => (
                            <div className="pListItem" key={i}>
                                <img
                                    src={img}
                                    alt=""
                                    className="pListImg"
                                />
                                <div className="pListTitles">
                                    <h1>{data[i]?.type}</h1>
                                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
};

export default PropertyList;