const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'sobre', 'projetos', 'skills', 'depoimentos', 'contato'].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ),
    )}
  </div>
)

export { NavigationDots }
