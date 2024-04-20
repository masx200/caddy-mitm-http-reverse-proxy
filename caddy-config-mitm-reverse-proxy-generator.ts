const banner = `
{
  log {
    output file ./access.log
    }
	debug
	local_certs
	    
	 servers :443 {
protocols h1 h2 h2c h3
        

    }
        
     servers :8443 {

      protocols h1 h2 h2c h3

    }
}

`;
const upstream = [
  "https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
];
const caddyFile = "./CaddyFile.txt";
const trailer = `



`;
const hostsFile = "./hosts.txt";
const domains = Array.from(
  new Set([
    "*.xxxxxxxxxxxxxxxxxxx",
    "www.xxxxxxxxxxxxxxxxxxx.com",
    "xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxx.com.hk",
    "xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxx.cn",
    "d.xxxxxxxxxxxxxxxxxxx.com",
    "xxxxxxxxxxxxxxxxxxx.com",
    "hub.xxxxxxxxxxxxxxxxxxx.com",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-5hne6n6e.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-npoldn7s.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-30a7rned.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-npoldn7s.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-a5msenll.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-npoldn7s.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-npoe7nes.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-npoldn7s.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-30a7rner.xxxxxxxxxxxx.xxxxxxxx",
    "gds.xxxxxxxxxxxxxxxxxxx.com",
    "xxxxxxxxxxxxxxxxxxx---sn-30a7rne6.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-npoeened.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-30a7rnek.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-p5qlsny6.xxxxxxxxxxxx.xxxxxxxx",
    "lh4.xxxxxxxxxxxxxxxxxxx.com",
    "xxxxxxxxxxxxxxxxxxx---sn-q4fl6nsd.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "suggestqueries-clients6.xxxxxxxxxxxxxxxxxxx.com",
    "xxxxxxxxxxxxxxxxxxx---sn-npoeenle.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-a5msenll.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-npoe7nds.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-npoe7nsr.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-30a7rned.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-p5qlsn6l.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx.com",
    "xxxxxxxxxxxxxxxxxxx---sn-30a7yney.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxxads.g.xxxxxxxxxxxxxxxxxxx.net",
    "accounts.xxxxxxxxxxxxxxxxxxx.com.sg",
    "xxxxxxxxxxxxxxxxxxx---sn-npoldn7l.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-30a7ynl7.xxxxxxxxxxxx.xxxxxxxx",
    "accounts.xxxxxxxxxxxxxxxxxxx.com",
    "xxxxxxxxxxxxxxxxxxx---sn-a5mlrnll.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "ssl.xxxxxxxxxxxxxxxxxxx.com",
    "lh3.xxxxxxxxxxxxxxxxxxx.com",
    "myaccount.xxxxxxxxxxxxxxxxxxx.com",
    "www.xxxxxxxxxxxxxxxxxxx.com",
    "ade.xxxxxxxxxxxxxxxxxxxsyndication.com",
    "cdn.xxxxxxxxxxxxxxxxxxx.io",
    "xxxxxxxxxxxxxxxxxxx.com",
    "www.xxxxxxxxxxxxxxxxxxx.com.sg",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxx.com",
    "www.xxxxxxxxxxxxxxxxxxx.com",
    "stats.g.xxxxxxxxxxxxxxxxxxx.net",
    "www.xxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.com",
    "www.xxxxxxxxxxxxxxxxxxxtagmanager.com",
    "www.xxxxxxxxxxxxxxxxxxx.com",
    "www.xxxxxxxxxxxxxxxxxxxadservices.com",
    "fonts.xxxxxxxxxxxxxxxxxxx.com",
    "objects.xxxxxxxxxxxxxxxxxxxusercontent.com",
    "xxxxxxxxxxxxxxxxxxx---sn-npoldn7y.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-a5mekndl.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-30a7ynl7.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-30a7rner.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-npoldn76.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "tpc.xxxxxxxxxxxxxxxxxxxsyndication.com",
    "yt3.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.com",
    "play.xxxxxxxxxxxxxxxxxxx.com",
    "i.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.com",
    "fonts.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.com",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "jnn-pa.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.com",
    "xxxxxxxxxxxxxxxxxxx---sn-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxx",
    "pagead2.xxxxxxxxxxxxxxxxxxxsyndication.com",
    "xxxxxxxxxxxxxxxxxxx---sn-npoe7nsr.xxxxxxxxxxxx.xxxxxxxx",
    "accounts.xxxxxxxxxxxxxxxxxxx.com",
    "xxxxxxxxxxxxxxxxxxx---sn-npoe7nl6.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-p5qlsnd6.xxxxxxxxxxxx.xxxxxxxx",
    "xxxxxxxxxxxxxxxxxxx---sn-npoe7nes.xxxxxxxxxxxx.xxxxxxxx",
    "ad.xxxxxxxxxxxxxxxxxxx.net",
  ]),
);
const pathname = "/token/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/https/";

const config = banner + domains.map((domain) => `

${domain} {
  encode gzip
  tls internal
  rewrite * ${pathname}{host}{uri}
  reverse_proxy * ${upstream.join(" ")} {
  fail_duration 10s
  max_fails 3
  unhealthy_status 5xx
  health_uri /
  health_status 200
  health_interval 10s
  header_up Host {upstream_hostport}
  }
  }

`).join("\n") + trailer;

await Deno.writeTextFile(caddyFile, config);

console.log(config);
const hosts = domains.filter((a) => !a.includes("*")).map((domain) => `

::1     ${domain}

`)
  .join("\n");
await Deno.writeTextFile(hostsFile, hosts);
console.log(hosts);
