import styles from '@/styles/Home.module.css'

export default function CoolButtonLinks() {
	return (
		<>
    	<div className={styles.grid}>
    		<a 
				href={dreadloreWebsite}
      	className={styles.card}
      	target="_blank"
      	rel="noopener noreferrer"
      	>
      		<h2>YouTube <span>-&gt;</span>
						</h2>
      		<p>Projects
      			</p>
      	</a>

      	<a
     		href="#"
      	className={styles.card}
      	target="_blank"
      	rel="noopener noreferrer"
     	 >
      		<h2>#<span>-&gt;</span>
	      	  </h2>
      		<p>
  					</p>
				</a>

      	<a
      	href="#"
      	className={styles.card}
      	target="_blank"
      	rel="noopener noreferrer"
     	 	>
        	<h2># <span>-&gt;</span>
          	</h2>
        	<p>
          	</p>
     		</a>

      	<a
      	href="#"
      	className={styles.card}
      	target="_blank"
      	rel="noopener noreferrer"
      	>
      		<h2> # <span>-&gt;</span>
        		</h2>
        		<p>
          		</p>
      	</a>
    	</div>
		</>
	);
}
