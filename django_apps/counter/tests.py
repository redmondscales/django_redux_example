from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class CounterTestCase(StaticLiveServerTestCase):

    def setUp(self):
         
        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        self.selenium = webdriver.Chrome(
            '/usr/local/bin/chromedriver', chrome_options=chrome_options)
        
        super(CounterTestCase, self).setUp()

    def tearDown(self):
        self.selenium.quit()
        super(CounterTestCase, self).tearDown()

    def test_counter_react_component_displays_count(self):
     
        self.selenium.get(str(self.live_server_url) + '/counter/')

        counter_display = self.selenium.find_element_by_id('redux_counter_display')
        self.assertEqual(counter_display.text, '1')

    def test_increment_button_updates_counter_display(self):
     
        self.selenium.get(str(self.live_server_url) + '/counter/')

        incrementer = self.selenium.find_element_by_id('react_incrementer_button')

        incrementer.click()
        
        header = self.selenium.find_element_by_id('redux_counter_display')
        self.assertEqual(header.text, '2')

