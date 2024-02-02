const ShareContent = forwardRef((props, ref) => {
    return  <section className="content"> 
        <input className="content__search" type="search" placeholder="🔍   링크를 검색해 보세요."/>
        <div ref={cardBox} className="content__cards">
            <div ref={blank} className="content__blank">저장된 링크가 없습니다</div>
        </div>
    </section>
});

export default ShareContent;