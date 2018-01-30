import nightmare from 'nightmare'

describe('when visiting the home page', () => {
  let page;

  beforeEach(()=> {
    page = nightmare().goto('http://localhost:3000').wait(200000)
  })

  it('displays header', async () => {
    let text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('Welcome to PlantEd')
  })

  it('displays plants', async () => {
    let text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('Aloe Vera')
  })
})
