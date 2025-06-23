import React, {useState} from "react";


export default function Filter({handleFilter}) {



    function handleChange(e) {
        handleFilter(e.target.value);
    }

    const [isOpen, setIsOpen] = useState(false);

    function openFilter() {
        setIsOpen(true);
    }

    function closeFilter() {
        setIsOpen(false);
    }

    return (
        <>


            <div className="secondary-btn filter-mobile" onClick={openFilter}>
                Фильтр
            </div>


            {isOpen && (
                <div className="wrapper--adaptive-filter">
                    <h3 onClick={closeFilter}>Закрыть</h3>

                    <form onChange={handleChange} className="container-filters">
                        <div className="filter">
                            <label htmlFor="all">Всё</label>
                            <input type="radio" id="all" name="fav_language" value="all"/>
                        </div>
                        <div className="filter">
                            <label htmlFor="accountant">Бухгалтерские услуги</label>
                            <input type="radio" id="accountant" name="fav_language" value="accountant"/>
                        </div>
                        <div className="filter">
                            <label htmlFor="lawyer">Юридические услуги</label>
                            <input type="radio" id="lawyer" name="fav_language" value="lawyer"/>
                        </div>
                        <div className="filter">
                            <label htmlFor="software">Программное обеспечение  1С</label>
                            <input type="radio" id="software" name="fav_language" value="software"/>
                        </div>
                        <div className="filter">
                            <label htmlFor="support">Сопровождение 1С</label>
                            <input type="radio" id="support" name="fav_language" value="support"/>
                        </div>
                    </form>
                </div>
            )}


            <div className="wrapper-filter">
                <p><strong>Фильтр</strong></p>
                <form onChange={handleChange} className="container-filters">
                    <div className="filter">
                        <label htmlFor="all">Всё</label>
                        <input type="radio" id="all" name="fav_language" value="all"/>
                    </div>
                    <div className="filter">
                        <label htmlFor="accountant">Бухгалтерские услуги</label>
                        <input type="radio" id="accountant" name="fav_language" value="accountant"/>
                    </div>
                    <div className="filter">
                        <label htmlFor="lawyer">Юридические услуги</label>
                        <input type="radio" id="lawyer" name="fav_language" value="lawyer"/>
                    </div>
                    <div className="filter">
                        <label htmlFor="software">Программное обеспечение  1С</label>
                        <input type="radio" id="software" name="fav_language" value="software"/>
                    </div>
                    <div className="filter">
                        <label htmlFor="support">Сопровождение 1С</label>
                        <input type="radio" id="support" name="fav_language" value="support"/>
                    </div>
                </form>
            </div>
        </>
    )
}