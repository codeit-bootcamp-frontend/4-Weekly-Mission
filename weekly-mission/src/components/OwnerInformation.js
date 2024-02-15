import styled from 'styled-components';



const OwnerCard = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    
    .owner-information {
        text-align: center;
    }

    .owner-img {
        width: 6rem;
        height: 6rem;
        margin: auto;

    }

    .owner-img>img {
        width: 100%;
        border-radius: 50%;
    }

    .owner-name {
        font-size: 1.2rem;
        line-height: 150%;
        margin-top: 1.2rem;
        display: inline-flex;
    }

    .folder-name {
        font-size: 3rem;
        color: #000;
        text-align: center;
        line-height: 1;
    }
`;



function OwnerInformation({ information }) {
    const { name, owner } = information;


    return (
        <OwnerCard>
            <div className='owner-information'>
                <div className='owner-img'>
                    <img src={owner.profileImageSource} alt='폴더소유자 프로필 이미지' />
                </div>
                <span className='owner-name'>
                    @{owner.name}
                </span>
            </div>
            <div className='folder'>
                <strong className='folder-name'>
                    {name}
                </strong>
            </div>
        </OwnerCard>
    );
};

export default OwnerInformation;