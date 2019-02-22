<?php
require_once('vendor/autoload.php');

use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;

$client = new Client([
    'base_uri' => 'http://gbf-wiki.com/',
]);

$list = $client->get('/index.php?%A5%C6%A1%BC%A5%D6%A5%EB%2F%C1%B4%A5%AD%A5%E3%A5%E9%A5%AF%A5%BF%A1%BC%B0%EC%CD%F7');

if ($list->getStatusCode() === 200) {
    $crawler = new Crawler($list->getBody()->getContents());

    $crawler->filter('[id="sortabletable1"] tbody tr')->each(function($tr) {
        $tds = $tr->filter('td');

        $character = collect([
            'id'      => (int) $tds->eq(0)->text(),
            'name'    => (string) $tds->eq(1)->text(),
            'link'    => (string) $tds->eq(2)->filter('a')->attr('href'),
            'element' => (string) $tds->eq(3)->text(),
            'type'    => (string) $tds->eq(4)->text(),
            'race'    => (string) $tds->eq(5)->text(),
            'sex'     => (string) $tds->eq(6)->text(),
            'weapon1' => (string) $tds->eq(7)->text(),
            'weapon2' => (string) $tds->eq(8)->text(),
        ]);
        
        $detail = $client->get($character->get('href'));

        if ($detail->getStatusCode() === 200) {
            $detailCrawler = new Crawler($detail->getBody()->getContents());
            
        }
        
    });
}