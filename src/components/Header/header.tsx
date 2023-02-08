import { Search } from '../../features/search'
import './styles.scss'

const Header = () => {
  return (
    <header className='l-header'>
      <a href='/'>
        <svg className='o-header__logo' viewBox="0 0 32 32"><rect rx="16"></rect><path fillRule="evenodd" clipRule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"></path></svg>
      </a>
      <Search />
      <button data-variant="naked" className="o-header__cart" aria-label="Cart items: 1"><svg width="20" height="22" viewBox="0 0 20 22" fill="none" stroke="currentColor"><path d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1 5H19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className='o-header__bag'>1</span></button>
    </header>
  )
}

export { Header }