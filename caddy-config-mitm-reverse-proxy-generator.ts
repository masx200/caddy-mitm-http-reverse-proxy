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
    "www.v2ex.com",
    "translate.google.com.hk",
    "translate.google.cn",
    "d.apkpure.com",
    "apkpure.com",
    "hub.docker.com",
    "rr2---sn-npoldne7.xxxxxxxxxxxx.xxxxxxxx",
    "rr5---sn-npoe7ne6.xxxxxxxxxxxx.xxxxxxxx",
    "rr3---sn-5hnednsz.xxxxxxxxxxxx.xxxxxxxx",
    "rr5---sn-25glenlr.xxxxxxxxxxxx.xxxxxxxx",
    "rr5---sn-5hne6n6e.xxxxxxxxxxxx.xxxxxxxx",
    "rr1---sn-4g5ednsd.xxxxxxxxxxxx.xxxxxxxx",
    "rr5---sn-npoeenly.xxxxxxxxxxxx.xxxxxxxx",
    "rr4---sn-npoldn7s.xxxxxxxxxxxx.xxxxxxxx",
    "rr1---sn-30a7rned.xxxxxxxxxxxx.xxxxxxxx",
    "rr4---sn-npoldn7s.xxxxxxxxxxxx.xxxxxxxx",
    "rr5---sn-a5meknzs.xxxxxxxxxxxx.xxxxxxxx",
    "rr4---sn-a5msenll.xxxxxxxxxxxx.xxxxxxxx",
    "rr5---sn-npoe7nek.xxxxxxxxxxxx.xxxxxxxx",
    "rr4---sn-npoldn7s.xxxxxxxxxxxx.xxxxxxxx",
    "rr1---sn-npoe7nes.xxxxxxxxxxxx.xxxxxxxx",
    "rr5---sn-npoe7nek.xxxxxxxxxxxx.xxxxxxxx",
    "rr5---sn-a5meknzs.xxxxxxxxxxxx.xxxxxxxx",
    "rr4---sn-npoldn7s.xxxxxxxxxxxx.xxxxxxxx",
    "rr2---sn-30a7rner.xxxxxxxxxxxx.xxxxxxxx",
    "gds.google.com",
    "rr2---sn-30a7rne6.xxxxxxxxxxxx.xxxxxxxx",
    "rr2---sn-npoeened.xxxxxxxxxxxx.xxxxxxxx",
    "rr5---sn-30a7rnek.xxxxxxxxxxxx.xxxxxxxx",
    "rr4---sn-p5qlsny6.xxxxxxxxxxxx.xxxxxxxx",
    "lh4.googleusercontent.com",
    "rr4---sn-q4fl6nsd.xxxxxxxxxxxx.xxxxxxxx",
    "rr5---sn-q4fzenee.xxxxxxxxxxxx.xxxxxxxx",
    "suggestqueries-clients6.youtube.com",
    "rr1---sn-npoeenle.xxxxxxxxxxxx.xxxxxxxx",
    "rr3---sn-a5msenll.xxxxxxxxxxxx.xxxxxxxx",
    "rr2---sn-npoe7nds.xxxxxxxxxxxx.xxxxxxxx",
    "rr5---sn-npoe7nsr.xxxxxxxxxxxx.xxxxxxxx",
    "rr3---sn-30a7rned.xxxxxxxxxxxx.xxxxxxxx",
    "rr1---sn-p5qlsn6l.xxxxxxxxxxxx.xxxxxxxx",
    "rr2---sn-npoldn7d.xxxxxxxxxxxx.xxxxxxxx",
    "youtube.com",
    "rr1---sn-30a7yney.xxxxxxxxxxxx.xxxxxxxx",
    "googleads.g.doubleclick.net",
    "accounts.google.com.sg",
    "rr5---sn-npoldn7l.xxxxxxxxxxxx.xxxxxxxx",
    "rr4---sn-30a7ynl7.xxxxxxxxxxxx.xxxxxxxx",
    "accounts.youtube.com",
    "rr5---sn-a5mlrnll.xxxxxxxxxxxx.xxxxxxxx",
    "rr2---sn-npoeenly.xxxxxxxxxxxx.xxxxxxxx",
    "ssl.gstatic.com",
    "lh3.googleusercontent.com",
    "myaccount.google.com",
    "www.youtube.com",
    "ade.googlesyndication.com",
    "cdn.sanity.io",
    "github.com",
    "www.google.com.sg",
    "analytics.google.com",
    "www.google.com",
    "stats.g.doubleclick.net",
    "www.google-analytics.com",
    "www.googletagmanager.com",
    "www.gstatic.com",
    "www.googleadservices.com",
    "fonts.gstatic.com",
    "objects.githubusercontent.com",
    "rr2---sn-npoldn7y.xxxxxxxxxxxx.xxxxxxxx",
    "rr5---sn-a5mekndl.xxxxxxxxxxxx.xxxxxxxx",
    "rr4---sn-npoe7nek.xxxxxxxxxxxx.xxxxxxxx",
    "rr2---sn-30a7ynl7.xxxxxxxxxxxx.xxxxxxxx",
    "rr4---sn-30a7rner.xxxxxxxxxxxx.xxxxxxxx",
    "rr2---sn-npoldn76.xxxxxxxxxxxx.xxxxxxxx",
    "rr1---sn-npoldn7d.xxxxxxxxxxxx.xxxxxxxx",
    "tpc.googlesyndication.com",
    "yt3.ggpht.com",
    "play.google.com",
    "i.ytimg.com",
    "fonts.googleapis.com",
    "rr2---sn-npoeenez.xxxxxxxxxxxx.xxxxxxxx",
    "jnn-pa.googleapis.com",
    "rr2---sn-a5msenes.xxxxxxxxxxxx.xxxxxxxx",
    "pagead2.googlesyndication.com",
    "rr4---sn-npoe7nsr.xxxxxxxxxxxx.xxxxxxxx",
    "accounts.google.com",
    "rr2---sn-npoe7nl6.xxxxxxxxxxxx.xxxxxxxx",
    "rr5---sn-p5qlsnd6.xxxxxxxxxxxx.xxxxxxxx",
    "rr2---sn-npoe7nes.xxxxxxxxxxxx.xxxxxxxx",
    "ad.doubleclick.net",
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
